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

public class ValidateServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public ValidateServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        String id = request.getParameter("id");

        if (id != null) {
            if (id.equals("1") || id.equals("2")) {
                String usernameParam = (id.equals("1")) ? "u_username" : "a_username";
                String emailParam = (id.equals("1")) ? "u_email" : "a_email";
                String passwordParam = (id.equals("1")) ? "u_password" : "a_password";
                String phoneParam = (id.equals("1")) ? "u_phone" : "a_phone";
                String findMemberParam = "findMember";

                String username = request.getParameter(usernameParam);
                String email = request.getParameter(emailParam);
                String password = request.getParameter(passwordParam);
                String phone = request.getParameter(phoneParam);
                String findMember = request.getParameter(findMemberParam);

                String filePath = "C:/Users/Barath/eclipse-workspace/updatedtable/src/main/webapp/Admin.json";

                JsonObject userDetails = new JsonObject();
                userDetails.addProperty("username", username);
                userDetails.addProperty("email", email);
                userDetails.addProperty("password", password);
                userDetails.addProperty("phone", phone);
                userDetails.addProperty("findMember", findMember);

                try {
                    JsonParser parser = new JsonParser();
                    JsonElement rootElement = parser.parse(new FileReader(filePath));

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
            } else if (id.equals("3")) {
                String loginUsername = request.getParameter("loginUsername");
                String loginPassword = request.getParameter("loginPassword");

                String findMember = validateCredentials(loginUsername, loginPassword);

                if (findMember != null) {
                    // Valid credentials
                    response.getWriter().write("success:" + findMember);
                } else {
                    // Invalid credentials
                    response.getWriter().write("invalid");
                }
            } else {
                // Handle the case when id is invalid
                response.getWriter().write("Invalid request.");
            }
        } else {
            // Handle the case when id is null
            response.getWriter().write("Invalid request.");
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    private String validateCredentials(String loginUsername, String loginPassword) {
        String filePath = "C:/Users/Barath/eclipse-workspace/updatedtable/src/main/webapp/Admin.json";
        try {
            JsonParser parser = new JsonParser();
            JsonElement rootElement = parser.parse(new FileReader(filePath));

            if (rootElement.isJsonArray()) {
                JsonArray rootArray = rootElement.getAsJsonArray();
                for (JsonElement element : rootArray) {
                    JsonObject userDetails = element.getAsJsonObject();
                    String username = userDetails.get("username").getAsString();
                    String password = userDetails.get("password").getAsString();
                    String findMember = userDetails.get("findMember").getAsString();

                    if (username.equals(loginUsername) && password.equals(loginPassword)) {
                        return findMember;
                    }
                }
            } else if (rootElement.isJsonObject()) {
                JsonObject rootObject = rootElement.getAsJsonObject();
                for (Map.Entry<String, JsonElement> entry : rootObject.entrySet()) {
                    JsonObject userDetails = entry.getValue().getAsJsonObject();
                    String username = userDetails.get("username").getAsString();
                    String password = userDetails.get("password").getAsString();
                    String findMember = userDetails.get("findMember").getAsString();

                    if (username.equals(loginUsername) && password.equals(loginPassword)) {
                        return findMember;
                    }
                }
            } else {
                System.out.println("Invalid JSON structure");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    private static void writeToFile(String filePath, JsonElement jsonElement) {
        try (FileWriter fileWriter = new FileWriter(filePath)) {
            fileWriter.write(jsonElement.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}