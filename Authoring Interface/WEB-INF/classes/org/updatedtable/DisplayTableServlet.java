package org.updatedtable;

import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/**
 * Servlet implementation class DisplayTableServlet
 */
public class DisplayTableServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DisplayTableServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        // TODO Auto-generated method stub
        String fileName = request.getParameter("filename");
        String fileContents = request.getParameter("filecontent");
         
        String[] arr = fileContents.split(".&#");
        
        String filePath = "C:/Users/Barath/eclipse-workspace/updatedtable/src/main/webapp/table_data.json";
        
        JsonObject tableDetails = new JsonObject();
        for(int i = 0; i < arr.length; i++) {
            String a = String.valueOf(i);
            tableDetails.addProperty(a, arr[i]);
        }
        
        
        try {
            // Read the existing JSON file
            JsonParser parser = new JsonParser();
            JsonElement rootElement = parser.parse(new FileReader(filePath));
            System.out.println(rootElement);
            // Check if the root element is an array or an object
            if (rootElement.isJsonArray()) {
                JsonArray rootArray = rootElement.getAsJsonArray();
                rootArray.add(tableDetails);
                writeToFile(filePath, rootArray);
               
            } else if (rootElement.isJsonObject()) {
                JsonObject rootObject = rootElement.getAsJsonObject();
                rootObject.add(fileName, tableDetails);
                writeToFile(filePath, rootObject);
               
            } else {
                System.out.println("Invalid JSON structure");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
       
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

    private static void writeToFile(String filePath, JsonElement jsonElement) {
        try (FileWriter fileWriter = new FileWriter(filePath)) {
            fileWriter.write(jsonElement.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}