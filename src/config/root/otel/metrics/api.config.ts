import { IsBoolean, IsString } from 'class-validator';

export class ApiConfig {
  @IsBoolean()
  enable!: boolean;

  defaultAttributes!: { [key: string]: string };

  @IsString({ each: true })
  ignoreRoutes!: string[];

  @IsBoolean()
  ignoreUndefinedRoutes!: boolean;
}
