import { Component } from "mrdamian/model/component";
import type { ComponentConfig } from "mrdamian/model/parameters";
import type { Field } from "mrdamian/model/variable";

type YoutubeConfig = ComponentConfig;

export default class Youtube extends Component<YoutubeConfig> {
  public async run(): Promise<Field> {
    // TODO: implement
    return {};
  }
}
