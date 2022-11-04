export interface File {
    data: string;
    file: FileClass;
    name: string;
    path: string;
}

export interface FileClass {
    absolute:      boolean;
    absolutePath:  string;
    canonicalPath: string;
    directory:     boolean;
    executable:    boolean;
    file:          boolean;
    freeSpace:     number;
    hidden:        boolean;
    lastModified:  number;
    name:          string;
    parent:        string;
    path:          string;
    readable:      boolean;
    totalSpace:    number;
    usableSpace:   number;
    writable:      boolean;
}