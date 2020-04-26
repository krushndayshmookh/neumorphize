import { src, dest } from "gulp";
import sass from "gulp-sass";

sass.compiler = require("node-sass");

export function build_scss() {
  return src("./scss/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(dest("./dist/css"));
}

export default (cb) => {
  // place code for your default task here
  cb();
};
