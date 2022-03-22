export type studentTypes = {
    name: string,
    id: string;
    gender: string,
    language: string | null,
}

export type actionType = {
    payload: studentTypes,
    type: string,
}

export type appStoreType = {
    currentStudents: {
        value: studentTypes
    }
}

export type initialStuAns = {
    // value: {
    //     queNum: number,
    //     currAns: string,
    //     stuAns: string,
    // }[]  | []
    value: any[]
}

export type resultAct = {
    payload: {
        queNum: number,
        currAns: string,
        stuAns: string,
    },
    type?: string,
}