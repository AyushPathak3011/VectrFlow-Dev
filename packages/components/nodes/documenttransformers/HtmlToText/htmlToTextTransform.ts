// import { INode, INodeData, INodeParams } from '../../../src/Interface'
// import { getBaseClasses } from '../../../src/utils'
// import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
// import { HtmlToTextTransformer } from '@langchain/community/document_transformers/html_to_text'
// //import { RunnableLike } from 'langchain/sequence/runnable'

// class HtmlToTextConverter_Node implements INode {
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
//         this.label = 'HtmlToText Transformer'
//         this.name = 'htmlToTextConverter'
//         this.version = 1.0
//         this.type = 'HtmlToTextConverter'
//         this.icon = 'htmlToTextConverter.svg' // You can use an appropriate icon
//         this.category = 'Text Converters' // Adjust the category as needed
//         this.description = 'Converts HTML to plain text'
//         this.baseClasses = [this.type]
//         this.inputs = []
//     }

//     async init(nodeData: INodeData): Promise<any> {
//         const url = nodeData.inputs?.url as string
//         const loader = new CheerioWebBaseLoader(url) // Assuming 'url' is a property in nodeData
//         const docs = await loader.load()

//         const splitter = RecursiveCharacterTextSplitter.fromLanguage('html')
//         const transformer = new HtmlToTextTransformer()

//         const sequence = splitter.pipe(transformer)
//         const newDocuments = await sequence.invoke(docs)
//         console.log(newDocuments)
//         return sequence // This node returns the sequence, you might need to modify it based on your framework.
//     }
// }

// module.exports = { nodeClass: HtmlToTextConverter_Node }
