declare module "mqtt-match" {
  function match(filter: string, topic: string): boolean;
  export = match;
}