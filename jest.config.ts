import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.tsx', 
    'src/**/*.ts',
    '!**/node_modules/**',
    '!**/tests/**',
  ],
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
};
export default config;
// roots: ['src', 'tests'],