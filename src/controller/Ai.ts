import { FileDataPart, VertexAI } from "@google-cloud/vertexai";

async function analyze_all_modalities(projectId = "PROJECT_ID") {
    const vertexAI = new VertexAI({
      project: projectId,
      location: "us-central1",
    });
  
    const generativeModel = vertexAI.getGenerativeModel({
      model: "gemini-1.5-flash-001",
    });
    const imageFilePart = {
      file_data: {
  
        mime_type: "image/png",
        fileData: Buffer.from("", "base64"),
      },
    };
  
    const textPart = {
      text: `
      Read the number in the image
  
      Questions:
      - What is the number in the image?`,
    };
  
    const request = {
      contents: [{ role: "user", parts: [
        { text: textPart.text }, 
        { file_data: imageFilePart.file_data }
      ] }],
    };
  
    // const resp = await generativeModel.generateContent(request);
    // const contentResponse = await resp.response;
    // console.log(JSON.stringify(contentResponse));
  }