import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "biolab-learning-progress-v1";
export type LearningProgressStore = Record<string, number[]>;

export function sanitizeLearningProgress(value: unknown, validDeviceIds: ReadonlySet<string>): LearningProgressStore {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.entries(value as Record<string, unknown>).reduce<LearningProgressStore>((result, [deviceId, sections]) => {
    if (!validDeviceIds.has(deviceId) || !Array.isArray(sections)) return result;
    const validSections = sections
      .filter((section): section is number => Number.isInteger(section) && section >= 1 && section <= 16)
      .filter((section, index, values) => values.indexOf(section) === index)
      .sort((first, second) => first - second);
    if (validSections.length) result[deviceId] = validSections;
    return result;
  }, {});
}

export function readLearningProgress(validDeviceIds: ReadonlySet<string>): LearningProgressStore {
  if (typeof window === "undefined") return {};
  try {
    return sanitizeLearningProgress(JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}"), validDeviceIds);
  } catch {
    return {};
  }
}

export function useLearningProgress(validDeviceIds: ReadonlySet<string>) {
  const [progressByDevice, setProgressByDevice] = useState<LearningProgressStore>(() => readLearningProgress(validDeviceIds));

  useEffect(() => {
    setProgressByDevice((current) => sanitizeLearningProgress(current, validDeviceIds));
  }, [validDeviceIds]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progressByDevice));
  }, [progressByDevice]);

  const markSectionRead = useCallback((deviceId: string, sectionNumber: number) => {
    if (!validDeviceIds.has(deviceId) || !Number.isInteger(sectionNumber) || sectionNumber < 1 || sectionNumber > 16) return;
    setProgressByDevice((current) => {
      const currentSections = current[deviceId] || [];
      if (currentSections.includes(sectionNumber)) return current;
      return { ...current, [deviceId]: [...currentSections, sectionNumber].sort((first, second) => first - second) };
    });
  }, [validDeviceIds]);

  const getCompletedSections = useCallback((deviceId: string) => progressByDevice[deviceId] || [], [progressByDevice]);
  const learnedDeviceCount = useMemo(() => Object.values(progressByDevice).filter((sections) => sections.length > 0).length, [progressByDevice]);
  const completedSectionCount = useMemo(() => Object.values(progressByDevice).reduce((total, sections) => total + sections.length, 0), [progressByDevice]);

  return { getCompletedSections, markSectionRead, learnedDeviceCount, completedSectionCount };
}
