// utils/parseXML.js
import xml2js from 'xml2js';

export const parseXMLToJson = async (xml) => {
  return new Promise((resolve, reject) =>{xml2js.parseString(xml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
