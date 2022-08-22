import { Project } from 'tnp-helpers';


export class TsConfig {

  static from(pathOrObject: string | object) {
    return new TsConfig(pathOrObject);
  }

  private constructor(
    private pathOrObject: string | object,
  ) {

  }

  recreatePathesFor(project: Project[]) {

  }

}
