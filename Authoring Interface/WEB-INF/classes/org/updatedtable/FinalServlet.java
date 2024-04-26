package org.updatedtable;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/**
 * Servlet implementation class FinalServlet
 */
public class FinalServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public FinalServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // This method is not used, as the data is sent via POST request
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
    	
    	
    	String fileName = request.getParameter("fileName");
    	System.out.println(fileName);
        String updatedata = request.getParameter("updatedata");
        System.out.println(updatedata);
        String sentence = request.getParameter("sentance");
        System.out.println(sentence);
        String filePath = "C:/Users/Barath/eclipse-workspace/updatedtable/src/main/webapp/table_data.json";
        JsonObject dty =new JsonObject();
        dty.addProperty(sentence, updatedata);
        try {
            // Parse the JSON file
            JsonParser parser = new JsonParser();
            JsonObject rootObject = parser.parse(new FileReader(filePath)).getAsJsonObject();

            // Check if the filename exists in the JSON object
            if (rootObject.has(fileName)) {
                JsonObject fileObject = rootObject.getAsJsonObject(fileName);
                
                //in the fileObject find sentence value and update that value with updatedata value
                
                
                // Update the value you want to modify
                fileObject.add(sentence,dty.get(sentence));
                

                // Write the updated JSON object back to the file
                FileWriter writer = new FileWriter(filePath);
                writer.write(rootObject.toString());
                writer.flush();
                writer.close();

                System.out.println("Value updated successfully!");
                // Check if the sentence ID exists in the file object
                if (fileObject.has(sentence)) {
                   
                } else {
                    System.out.println("Sentence ID not found in the file object.");
                }
            } else {
                System.out.println("Filename not found in the JSON object.");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        response.getWriter().write("yes");
    }

    private static JsonObject readFromFile(String filePath) {
        try (FileReader fileReader = new FileReader(filePath)) {
            JsonParser parser = new JsonParser();
            JsonElement jsonElement = parser.parse(fileReader);
            return jsonElement.getAsJsonObject();
        } catch (IOException e) {
            e.printStackTrace();
            return new JsonObject();
        }
    }

    private static void writeToFile(String filePath, JsonElement jsonElement) {
        try (FileWriter fileWriter = new FileWriter(filePath)) {
            fileWriter.write(jsonElement.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}