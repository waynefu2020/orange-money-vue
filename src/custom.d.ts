type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag,
    createRecordError: Error | null
}
type RecordItem = {
    tags: Tag[],
    notes: string,
    type: string,
    amount: number,
    createAt?: string
}
type Tag = {
    id: string,
    name: string
}

