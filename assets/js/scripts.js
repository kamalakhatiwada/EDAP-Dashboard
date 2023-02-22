




// COLLAPSIBLE MENU
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });


// DROPDOWN SUBMENU
	document.addEventListener("DOMContentLoaded", function(){

		document.querySelectorAll('.sidebar .nav-link').forEach(function(element){

			element.addEventListener('click', function (e) {

				let nextEl = element.nextElementSibling;
				let parentEl  = element.parentElement;	

				if(nextEl) {
					e.preventDefault();	
					let mycollapse = new bootstrap.Collapse(nextEl);

			  		if(nextEl.classList.contains('show')){
			  			mycollapse.hide();
			  		} else {
			  			mycollapse.show();
			  			// find other submenus with class=show
			  			var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
			  			// if it exists, then close all of them
						if(opened_submenu){
							new bootstrap.Collapse(opened_submenu);
						}

			  		}
		  		}

			});
		})

	}); 



// datatable

	$(document).ready(function () {
		$('#example').DataTable(); 
	});


// select 2 dropdown
	$(document).ready(function () {
		$('.select-image').select2();
	});


// js tree
	
	$(document).ready(function() {
		var menuItems = [  
            { id: 'fields', parent: '#', text: 'Fields' },  
            { id: '1', parent: 'fields', text: 'Field1Lorem ipsum dolor sit amet, consectetur adipiscing'},  
            { id: '2', parent: '1', text: 'Field2', type: 'file'},  
            { id: '3', parent: 'fields', text: 'Field3'}, 
			{ id: '4', parent: '3', text: 'Field4', type: 'file'},  
			{ id: '5', parent: '3', text: 'Field5', type: 'file'},  
			{ id: '6', parent: '3', text: 'Field6', type: 'file'},   
			{ id: '7', parent: 'fields', text: 'Field7'},  
			{ id: '8', parent: '7', text: 'Field8', type: 'file'},  
			{ id: '9', parent: '7', text: 'Field9', type: 'file' },  


			{ id: 'new', parent: '#', text: 'New' },  
            { id: 'new1', parent: 'new', text: 'Field1'},  
            { id: 'new2', parent: 'new1', text: 'Field2', type: 'file'},  
            { id: 'new3', parent: 'new', text: 'Field3'}, 
			{ id: 'new4', parent: 'new3', text: 'Field4', type: 'file'},  
			{ id: 'new5', parent: 'new3', text: 'Field5', type: 'file'},  
			{ id: 'new6', parent: 'new3', text: 'Field6', type: 'file'},   
			{ id: 'new7', parent: 'new', text: 'Field7'},  
			{ id: 'new8', parent: 'new7', text: 'Field8', type: 'file'},  
			{ id: 'new9', parent: 'new7', text: 'Field9', type: 'file'},  

			{ id: 'new18', parent: 'new7', text: 'Field8', type: 'file'},  
			{ id: 'new19', parent: 'new7', text: 'Field9', type: 'file'},  

			{ id: 'new28', parent: 'new7', text: 'Field8', type: 'file'},  
			{ id: 'new29', parent: 'new7', text: 'Field9', type: 'file'},  


			{ id: 'new38', parent: 'new7', text: 'Field8', type: 'file'},  
			{ id: 'new39', parent: 'new7', text: 'Field9', type: 'file'},  

            
        ]  

		$('#SimpleJSTree').jstree({
			"core": {
				"data": menuItems,
			},
			"types": {
				"default": {
					"icon": "fa fa-folder text-warning"
				},  
				"folder-close": {  
					"icon": "fa fa-folder text-warning"  
				},
				"folder-open": {  
					"icon": "fa fa-folder-open text-warning"  
				},  
				"file": {  
					"icon": "fa fa-file text-danger"  
				}  
			},  
			"plugins": ["contextmenu", "types"],
			"contextmenu": {
				items: function ($node){
					if($node.type !== 'file'){
						return {
							"add_folder": {
								"label": "Add Folder",
								"icon": "fa fa-plus",  
								"action": function (obj) {  
									$("#exampleModal").modal("show"); 
								}, 
							},
							"add_action_item": {
								"label": "Add Action Item",
								"icon": "fa fa-plus", 
								"action": function (obj) {  
									
								}, 
							},
							"edit_action_item": {
								"label": "Edit Action Item",
								"icon": "fa fa-pencil", 
								"action": function (obj) {  
									
								}, 
							},
						}
					}
				}
			}
		  });

		$("#jstree").on('open_node.jstree', function (event, data) {
			data.instance.set_type(data.node,'folder-open');
		});
		$("#jstree").on('close_node.jstree', function (event, data) {
			data.instance.set_type(data.node,'folder-close');
		});
		

		// $(document).on('click', '.jstree-anchor', function(e) {
			
		// });
	});