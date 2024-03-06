$(document).ready(function () {

    // On click Table row selected
    $("tbody :checkbox").on("click", function () {
        $(this)
            .closest("tr")
            .toggleClass("selected", this.checked);

        $(this).closest("table")
            .find("#checkAll")
            .prop("checked",
                $(this)
                    .closest("table")
                    .find("tbody :checkbox:checked").length ==
                $(this)
                    .closest("table")
                    .find("tbody :checkbox").length
            );
    });

    // Checkbox check function
    $('#checkAll').click(function () {
        if (this.checked) {
            $("#table :checkbox").prop("checked", true);
            $("tr").addClass("selected", this.checked);
        } else {
            $("#table :checkbox").prop("checked", false);
            $("tr").removeClass("selected", this.checked);
        }
    });

    // checkbox select all function
    $("#table :checkbox").click(function () {
        var numberOfCheckboxes = $("#table :checkbox").length;
        var numberOfCheckboxesChecked = $('#table :checkbox:checked').length;
        if (numberOfCheckboxes == numberOfCheckboxesChecked) {
            $("#checkAll").prop("checked", true);
        } else {
            $("#checkAll").prop("checked", false);
        }
        $("#selectedItems").text(numberOfCheckboxesChecked);
    });


    // Jquery delete button
    $("#deletebutton").on('click', function () {
        var checked = jQuery('input:checkbox:checked').map(function () {
            return this.value;
        }).get();
        jQuery('input:checkbox:checked').parents("tr").remove();
        $("#selectedItems").text("0");
        $('#result').text($('#table tbody tr').length);
    });

    // Count Row Function
    $('#result').text($('#table tbody tr').length);

    // Descripton Table Full view
    $(".des").on("click", function () {
        $("#table p").toggleClass("overflowVisible")
    })

    // Toggle Menu Button
    $("#bars").on("click", function () {
        $(".sidebar").toggleClass("hide m-block");
        $("#main").toggleClass("FullScreen");
    })

    // Close button Mobile view navbar
    $("#close").on("click", function () {
        $(".sidebar").toggleClass("hide m-block");
        $("#main").toggleClass("FullScreen");
    })

    // Search Filter
    $(".searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        var searchFun = $("#table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if (value == "")
            $("#footer").removeClass("d-none");
        else {
            $("#footer").addClass("d-none");
        }
    });
});