/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.yaml' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpg?sizes=*' {
  const content: {
    src: string;
    srcSet: string;
    placeholder?: string;
    images: Array<{ path: string; width: number }>;
  };
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.webp?sizes=*' {
  const content: {
    src: string;
    srcSet: string;
    placeholder?: string;
    images: Array<{ path: string; width: number }>;
  };
  export default content;
}

declare module '*.png?sizes=*' {
  const content: {
    src: string;
    srcSet: string;
    placeholder?: string;
    images: Array<{ path: string; width: number }>;
  };
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}


declare module '*.jpeg' {
  const content: string;
  export default content;
}

