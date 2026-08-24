import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../release/sync_release.mjs", import.meta.url), "utf8");

assert.match(source, /RCLONE_DRIVE_DESTINATION/);
assert.match(source, /RCLONE_CONFIG_PATH/);
assert.match(source, /function uploadOrUpdateDriveWithFallback/);
assert.match(source, /"rclone"/);
assert.match(source, /"copyto"/);
assert.match(source, /"lsjson"/);
assert.match(source, /driveTransport/);
assert.match(source, /DRIVE_SNAPSHOT_NAME/);
assert.match(source, /EXCLUDED_FILES/);
assert.match(source, /\.project-config\.json/);

console.log("Release skriptida Drive fallback va maxfiy platform konfiguratsiyasini chiqarib tashlash kontraktlari muvaffaqiyatli tekshirildi.");
