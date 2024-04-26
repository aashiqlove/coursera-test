package org.updatedtable;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/**
 * Servlet implementation class AdminServlet
 */

public class AdminServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdminServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		
		String sno = request.getParameter("sno");
		
        String fname = request.getParameter("fname");
        String process = request.getParameter("process");
        String editor = request.getParameter("editor").toLowerCase();
        String sentenceId = request.getParameter("sentenceId");
        String lineNumbers = request.getParameter("lineNumbers");
        String assigned = request.getParameter("assigned");
        
     //   System.out.println(sno);
       // System.out.println(fname);
        //System.out.println(process);
        //System.out.println(editor);
        //System.out.println(assigned);
        
        String filePath = "C:/Users/Barath/eclipse-workspace/updatedtable/src/main/webapp/ad_data.json";
        
        JsonObject userDetails = new JsonObject();
        userDetails.addProperty("S_no", sno);
        userDetails.addProperty("File_name", fname);
        userDetails.addProperty("Process", process);
        userDetails.addProperty("Editor_Name", editor);
        userDetails.addProperty("Sentence_Id", sentenceId);
        userDetails.addProperty("Line_Numbers", lineNumbers);
        userDetails.addProperty("Status", assigned);
        
        
        try {
            // Read the existing JSON file
            JsonParser parser = new JsonParser();
            JsonElement rootElement = parser.parse(new FileReader(filePath));
            
            // Check if the root element is an array or an object
            if (rootElement.isJsonArray()) {
                JsonArray rootArray = rootElement.getAsJsonArray();
                rootArray.add(userDetails);
                writeToFile(filePath, rootArray);
               
            } else if (rootElement.isJsonObject()) {
                JsonObject rootObject = rootElement.getAsJsonObject();
                rootObject.add("newData", userDetails);
                writeToFile(filePath, rootObject);
               
            } else {
                System.out.println("Invalid JSON structure");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
		//response.getWriter().append("Served at: ").append(request.getContextPath());
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