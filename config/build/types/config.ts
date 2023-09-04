import { EntryObject } from "webpack";

export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: EntryObject;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  port: number,
  isDev: boolean
}

export interface BuildEnv {
  mode: BuildMode;
  port: number
}