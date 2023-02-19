

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
	// DOMContentLoaded  end

// DATATABLE

    $(document).ready(function () {
        $('#example').DataTable();
    });


	// JS TREE


	
    $(function () {
      // 6 create an instance when the DOM is ready
      $('#jstree').jstree({
		"core": {
			"check_callback": true,
		},
		"plugins": ["contextmenu"]
	  });
	

      // 7 bind to events triggered on the tree
      $('#jstree').on("changed.jstree", function (e, data) {
        console.log(data.selected);
      });
	  $(document).on('click', '.jstree-anchor', function(e) {
		$("#exampleModal").modal("show");
	});
      // 8 interact with the tree - either way is OK
      $('button').on('click', function () {
        $('#jstree').jstree(true).select_node('child_node_1');
        $('#jstree').jstree('select_node', 'child_node_1');
        $.jstree.reference('#jstree').select_node('child_node_1');
      });
    });
   


	// select2

	$(document).ready(function() {
		$('.select-image').select2();
	});