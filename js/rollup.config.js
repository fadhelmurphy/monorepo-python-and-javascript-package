// js/rollup.config.js
import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';


const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, "package.json"));
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, `${PKG_JSON.main}`);
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, 'dist');

// Fungsi untuk menghasilkan konfigurasi Rollup untuk setiap package
const generateRollupConfig = () => {

  return {
    input: INPUT_FILE,
    output: {
      dir: OUTPUT_DIR,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      // Plugin tambahan bisa ditambahkan di sini sesuai kebutuhan
    ],
  };
};

export default generateRollupConfig();
