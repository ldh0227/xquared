if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicColorPickerDialog='<form action="#" class="xqFormDialog xqBasicColorPickerDialog">\n		<div>\n			<label>\n				<input type="radio" class="initialFocus" name="color" value="black" checked="checked" />\n				<span style="color: black;">Black</span>\n			</label>\n			<label>\n				<input type="radio" name="color" value="red" />\n				<span style="color: red;">Red</span>\n			</label>\n				<input type="radio" name="color" value="yellow" />\n				<span style="color: yellow;">Yellow</span>\n			</label>\n			</label>\n				<input type="radio" name="color" value="pink" />\n				<span style="color: pink;">Pink</span>\n			</label>\n			<label>\n				<input type="radio" name="color" value="blue" />\n				<span style="color: blue;">Blue</span>\n			</label>\n			<label>\n				<input type="radio" name="color" value="green" />\n				<span style="color: green;">Green</span>\n			</label>\n			\n			<input type="submit" value="Ok" />\n			<input type="button" class="cancel" value="Cancel" />\n		</div>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicFileUploadDialog='<form id="fileUploadDialog" class="xqFormDialog modal" method="post" enctype="multipart/form-data" target="uploadTarget" action="">\n		<h3>Upload image</h3>\n		<div class="dialog-content">\n			<div class="attachment-section">\n				<label class="label" for="searchAttachFile">Find a file</label><input type="file" class="type-text" id="searchAttachFile" name="FileData" />\n			</div>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<iframe id="uploadTarget" name="uploadTarget" src="" style="width:0;height:0;border:0px solid #fff;"></iframe>\n		<a href="#" class="cancel close-dialog"><img src="../images/dialogs/icon_close.gif" alt="Close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicIFrameDialog='<form id="iframeDialog" class="xqFormDialog modal">\n		<h3>Insert IFrame</h3>\n		<div class="dialog-content">\n			<p>IFrame src: <input type="text" class="initialFocus type-text" name="p_src" size="36" value="http://" /></p>\n			<p>Width: <input type="text" class="type-text" name="p_width" size="6" value="320" /></p>\n			<p>Height: <input type="text" class="type-text" name="p_height" size="6" value="200" /></p>\n			<p>Frame border:\n				<select name="p_frameborder">\n					<option value="0" selected="selected">No</option>\n					<option value="1">Yes</option>\n				</select></p>\n			<p>Scrolling: \n				<select name="p_scrolling">\n					<option value="0">No</option>\n					<option value="1" selected="selected">Yes</option>\n				</select></p>\n			<p>ID(optional): <input type="text" class="type-text" name="p_id" size="24" value="" /></p>\n			<p>Class(optional): <input type="text" class="type-text" name="p_class" size="24" value="" /></p>\n			\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="../images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicLinkDialog='<form id="linkDialog" class="xqFormDialog lightweight" action="#">\n		<h3>link</h3>\n		<div class="dialog-content">\n			<p>Please enter the URL and label.</p>\n			<input type="text" name="text" class="type-text" value="" />\n			<input type="text" name="url" class="type-text" value="http://" />\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Cancel</a>\n				<a href="#" class="button-gray submit">Create</a>\n			</div>\n		</div>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicMovieDialog='<form id="videoDialog" class="xqFormDialog modal">\n		<h3>Insert Movie</h3>\n		<div class="dialog-content">\n			<p>Insert an Embed code to add a movie clip from YouTube, Yahoo video, vimeo and slideshare.</p>\n			<textarea class="initialFocus" name="html"></textarea>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="../images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicScriptDialog='<form id="scriptDialog" class="xqFormDialog modal">\n		<h3>Insert Script</h3>\n		<div class="dialog-content">\n			<p>Script URL:\n			<input type="text" class="initialFocus" class="type-text" name="url" size="36" value="http://" /></p>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="../images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
