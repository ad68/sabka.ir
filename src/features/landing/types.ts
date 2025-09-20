export type News = {
    createdBy: string,
    createdOn: string,
    modifiedBy: string,
    modifiedOn: string,
    version: number,
    enable: boolean,
    regDate: string,
    id: number,
    persianTitle1: string,
    englishTitle1: string,
    persianTitle2: string,
    englishTitle2: string,
    persianTitle3: string,
    englishTitle3: string,
    persianDescription: string,
    englishDescription: string,
    persianPublicationName: string,
    englishPublicationName: string,
    quarterlyIssue: string,
    yearPublish: string,
    fileUrl: string,
    datePublish: string,
    articleType: string,
    statusArticleType: string,
    visitNumber: number,
    documentFiles: any,
    metaData: string
}

export type NewsCardProp = {
    title: string,
    id: number,
    imgUrl: string,
    date: string
}
export type FetchNewsResponse = {
    elements: Array<News>,
    totalElements: number
}