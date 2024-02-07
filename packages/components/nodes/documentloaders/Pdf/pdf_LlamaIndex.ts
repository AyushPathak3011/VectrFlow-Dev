// import { INode, INodeData, INodeParams } from '../../../src/Interface'
// import { NodeParser } from 'llamaindex'
// import { Document } from 'llamaindex'

// class PdfDocumentLoader implements INode {
//     label: string
//     name: string
//     version: number
//     description: string
//     type: string
//     icon: string
//     category: string
//     baseClasses: string[]
//     inputs: INodeParams[]

//     constructor() {
//         this.label = 'Pdf File LlamaIndex'
//         this.name = 'pdfFile'
//         this.version = 1.0
//         this.type = 'Document'
//         this.icon = 'pdf.svg'
//         this.category = 'Document Loaders'
//         this.description = 'Load data from PDF files'
//         this.baseClasses = [this.type]
//         this.inputs = [
//             {
//                 label: 'Pdf File',
//                 name: 'pdfFile',
//                 type: 'file',
//                 fileType: '.pdf'
//             },
//             {
//                 label: 'Text Splitter',
//                 name: 'textSplitter',
//                 type: 'TextSplitter',
//                 optional: true
//             },
//             {
//                 label: 'Usage',
//                 name: 'usage',
//                 type: 'options',
//                 options: [
//                     {
//                         label: 'One document per page',
//                         name: 'perPage'
//                     },
//                     {
//                         label: 'One document per file',
//                         name: 'perFile'
//                     }
//                 ],
//                 default: 'perPage'
//             },
//             {
//                 label: 'Use Legacy Build',
//                 name: 'legacyBuild',
//                 type: 'boolean',
//                 optional: true,
//                 additionalParams: true
//             },
//             {
//                 label: 'Metadata',
//                 name: 'metadata',
//                 type: 'json',
//                 optional: true,
//                 additionalParams: true
//             }
//         ]
//     }

//     async init(nodeData: INodeData): Promise<any> {
//         const textSplitter = nodeData.inputs?.NodeParser.textSplitter as NodeParser
//         const pdfFileBase64 = nodeData.inputs?.pdfFile as string
//         const usage = nodeData.inputs?.usage as string
//         const metadata = nodeData.inputs?.metadata
//         const legacyBuild = nodeData.inputs?.legacyBuild as boolean

//         let alldocs = []
//         let files: string[] = []

//         if (pdfFileBase64.startsWith('[') && pdfFileBase64.endsWith(']')) {
//             files = JSON.parse(pdfFileBase64)
//         } else {
//             files = [pdfFileBase64]
//         }

//         for (const file of files) {
//             const splitDataURI = file.split(',')
//             splitDataURI.pop()
//             const bf = Buffer.from(splitDataURI.pop() || '', 'base64')
//             if (usage === 'perFile') {
//                 const loader = new Document(new Blob([bf]), {
//                     splitPages: false,
//                     pdfjs: () =>

//                         legacyBuild ? import('pdfjs-dist/legacy/build/pdf.js') : import('pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js')
//                 })

//             const docs = await loader.load()
//             )

//             if (textSplitter) {
//                 const docs = await loader.load(textSplitter)
//                 alldocs.push(...docs)
//             } else {
//                 const docs = await loader.load()
//                 alldocs.push(...docs)
//             }
//         }

//         if (metadata) {
//             const parsedMetadata = typeof metadata === 'object' ? metadata : JSON.parse(metadata)
//             const finaldocs = alldocs.map((doc) => ({
//                 ...doc,
//                 metadata: { ...doc.metadata, ...parsedMetadata }
//             }))
//             return finaldocs
//         }

//         return alldocs
//     }
// }

// export { PdfDocumentLoader }
