declare const isProd: boolean;

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}
