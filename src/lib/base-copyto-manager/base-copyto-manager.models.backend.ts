import { Project } from 'tnp-helpers';
import type { BaseCopytoManager } from './base-copyto-manager.backend';


export type ProjectOrPlace = (Project | string);

export interface BaseCopytoManagerOptions {
  isWorkspace?: boolean;
  /**
   * it will create copyto version of itself inside node_modules of main project
   */
  copyToItself?: boolean;
  compiledFolder: 'dist' | 'bundle' | 'out';
  compiledSourceFolder: 'src' | 'lib' | 'components';
  /**
   * Modify sourceMapFiles to get proper debugging
   */
  sourceMapFunctionFix?: (content: string, copiedAbsFilePath: string) => string;
  /**
   * when source file modifed..
   * this time tells that compiled file for source files has been created
   */
  compilationDelay?: number | ((context: BaseCopytoManager) => Promise<number>);
}
