import { IncCompiler } from 'incremental-compiler';
import { Project } from 'tnp-helpers';
import {
  BaseCopytoManagerOptions,
  ProjectOrPlace
} from './base-copyto-manager.models.backend';


@IncCompiler.Class({
  className: 'BaseCopytoManager'
})
export class BaseCopytoManager extends IncCompiler.Base<any> {

  get isStandalone() {
    return !this.options?.isWorkspace;
  }

  constructor(
    protected readonly project: Project,
    protected copyToProjectsOrPlaces: (ProjectOrPlace)[] = [],
    protected options?: BaseCopytoManagerOptions,
  ) {
    super();
    this.options = this.fixOptions(options);
  }


  /**
   * is allowed means:
   * - exists
   * - there is not concurent action like npm install
   */
  protected isAllowedToUpdatePlaceOrProject(placeOrProject: ProjectOrPlace): boolean {
    return true;
  }


  @IncCompiler.methods.AsyncAction()
  public async asyncAction(asyncEvents: IncCompiler.Change, additionalData?: any) {


    return;
  }


  public async syncAction(absolteFilesPathes?: string[]) {

    const projects = await this.onlyAllowedToUpdate();

    return;
  }

  private async onlyAllowedToUpdate() {
    const allowed: (ProjectOrPlace)[] = [];
    return allowed;
  }

  private fixOptions(options?: BaseCopytoManagerOptions) {
    if (!options) {
      options = {} as any;
    }
    if (!options.compiledFolder) {
      options.compiledFolder = 'dist';
    }
    if (!options.compiledSourceFolder) {
      options.compiledSourceFolder = 'src';
    }
    return options;
  }

}

