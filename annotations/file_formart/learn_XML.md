# XML BASICS 
XML, or **Extensible Markup Language**, 

## created storing and transporting data:
- was designed with the purpose of **storing and transporting data**.

## custom tags:
- XML do not come with **predefined tags**. Instead, it allows users to create their own tags, defining the structure of the data.

## can be used in many scenearios to store and transport data:
- The same XML data can be used in many different presentation scenarios. In a nutshell, XML's **primary function is to store and transport data**.

## Example: 

<?xml version="1.0" encoding="UTF-8"?>
<bookstore> 	\\ root element

  <book category="cooking"> 	\\* child of the root and sinblins
    <title lang="en">Everyday Italian</title> \\ subchild of the child root
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

  <book category="children"> 	\\* children and sinblins
    <title lang="en">Harry Potter</title> \\ subchild of the child root
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>

  <book category="web"> 	\\* child of the root and sinblins
    <title lang="en">XQuery Kick Start</title> \\ subchild of the child root
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>

  <book category="web" cover="paperback"> 	\\* child of the root and sinblins
    <title lang="en">Learning XML</title> \\ subchild of the child root
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>

</bookstore>

## structure:
In the example provided, It outlines a bookstore listing with various details such as book title, author, price, and year. **This structure is human-readable and effectively communicates the information it contains**.

## structure in nodes that organize data:
- The XML document's structure is explained in terms of **nodes(point connection)**. The root element, in this case, is "bookstore" with "book" as its child elements. These child elements, in turn, **can have their own children**, forming a **logical structure that organizes the data**.

## Focused on storing data: 
- Moving on to the example, the XML document with three products is presented. When viewed in a browser, it lacks any style information (CSS) for presentation. This highlights XML's role as a tool for storing data rather than displaying it.

## No predefined tags:
- Its flexibility, absence of predefined tags, and logical structure make it a handy choice for various applications.

## Combination with other programming languages:
 By combining XML with CSS, HTML, and JavaScript, we can create a presentation layer for users to view data in a browser or other devices. 

## tranposrt accross web service:
- XML also facilitates the transport of information across web services. 

## types 
· Stocks and Shares
· Financial transactions
· Medical data
· Mathematical data
· Scientific measurements
· News information
· Weather services


# functionalities:
## xml http requests: 
built-in XMLHttpRequest object to request data from a server.

- Update a web page
- Request data from a server
- Receive data from a server  
- Send data to a server

## example
var xhttp = new XMLHttpRequest();
\\ executed every time the status of the XMLHttpRequest object changes:
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       \\ Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();


## xml parser:
xml parser is meant to be a parser to access and manipulate XML.

##example:
<html>
<body>
<p id="demo"></p>

<script>
var text, parser, xmlDoc;

text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
</script>

</body>
</html>

in this example the xmlparser it uses the DOMparser to parser the string into a DOM object.

## XMLDOM: 

## example:
<html>
<body>

<p id="demo"></p>

<script>
var text, parser, xmlDoc;

text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
</script>

</body>
</html>

## XMLPATH
- used to navigate through elements and attributes in an XML document.
- XPath uses path expressions to select nodes or node-sets in an XML document. These path expressions look very much like the expressions you see when you work with a traditional computer file system.

**XPath Expression**	**Result**
/bookstore/book[1]	Selects the first book element that is the child of the bookstore element
/bookstore/book[last()]	Selects the last book element that is the child of the bookstore element
/bookstore/book[last()-1]	Selects the last but one book element that is the child of the bookstore element
/bookstore/book[position()<3]	Selects the first two book elements that are children of the bookstore element
//title[@lang]	Selects all the title elements that have an attribute named lang
//title[@lang='en']	Selects all the title elements that have a "lang" attribute with a value of "en"
/bookstore/book[price>35.00]	Selects all the book elements of the bookstore element that have a price element with a value greater than 35.00
/bookstore/book[price>35.00]/title	Selects all the title elements of the book elements of the bookstore element that have a price element with a value greater than 35.00


## XML XSLT:
xml xslt is recommended for style sheet language for XML.

## EXAMPLE:

<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">

<xsl:for-each select="breakfast_menu/food">

  <div style="background-color:teal;color:white;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="name"/> - </span>
    <xsl:value-of select="price"/>
    </div>
  <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <p>

    <xsl:value-of select="description"/>

    <span style="font-style:italic"> (<xsl:value-of select="calories"/> calories per serving)</span>
    </p>
  </div>
</xsl:for-each>
</body>
</html>

STOP WRITTING IS ALL HERE, DON'T WASTE TIME : https://www.w3schools.com/xml/xml_xquery.asp



