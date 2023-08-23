$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = '<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>'
    // Append table with add row form on add new button click
    $(".add-new").click(function () {
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="Plant" id="Plant"></td>' +
            '<td><input type="text" class="form-control" name="Material Description" id="mdesc"></td>' +
            '<td><input type="text" class="form-control" name="Equipment" id="Equipment"></td>' +
            '<td><input type="text" class="form-control" name="Type" id="Type"></td>' +
            '<td><input type="text" class="form-control" name="Part No" id="PartNo"></td>' +
            '<td><input type="text" class="form-control" name="SAPCode" id="SAPCode"></td>' +
            '<td><input type="text" class="form-control" name="SAPCode" id="InstalledQty"></td>' +
            '<td><input type="text" class="form-control" name="Spares" id="Spares"></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add", function () {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else {
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            input.each(function () {
                $(this).parent("td").html($(this).val());

            });
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
        }
        var rowno = $(this).closest('tr').index();
        var row = $(this).closest('tr');
        var col1 = row.find("td:eq(0)").html();
        var col2 = row.find("td:eq(1)").html();
        var col3 = row.find("td:eq(2)").html();
        var col4 = row.find("td:eq(3)").html();
        var col5 = row.find("td:eq(4)").html();
        var col6 = row.find("td:eq(5)").html();
        var col7 = row.find("td:eq(6)").html();
        var col8 = row.find("td:eq(7)").html();
        var editdata = {
            "Plant": col1,
            "mdesc": col2,
            "Equipment": col3,
            "Type": col4,
            "PartNo": col5,
            "SAPCode": col6,
            "InstalledQty": col7,
            "Spares": col8,
            "rowno": rowno
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editdata, null, 2)
        };
        fetch('/add', options);
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function () {
        $(this).parents("tr").find("td:not(:last-child)").each(function () {
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });

    // Delete row on delete button click
    //This function is used for deleting a table data
    $(document).on("click", ".delete", function(){
        var row = $(this).parents("tr").index();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([row])
        };
        console.log('Row' + row);
        fetch('/delete', options);
        console.log("delete done");

        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");

    });
    
});