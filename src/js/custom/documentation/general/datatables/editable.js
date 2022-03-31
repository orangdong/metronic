"use strict";

// Class definition
var KTDatatablesInlineEditable = function () {
    // Shared variables
    var table;
    var datatable;
    var datepicker;
    var dropdownFlag = false;
    const positionOptions = ['Accountant', 'Chief Executive Officer (CEO)', 'Chief Financial Officer (CFO)', 'Chief Marketing Officer (CMO)', 'Chief Operating Officer (COO)', 'Customer Support', 'Data Coordinator', 'Developer', 'Development Lead', 'Director', 'Financial Controller', 'Integration Specialist', 'Javascript Developer', 'Junior Javascript Developer', 'Junior Technical Author', 'Marketing Designer', 'Office Manager', 'Personnel Lead', 'Pre-Sales Support', 'Post-Sales support', 'Regional Director', 'Regional Marketing', 'Sales Assistant', 'Secretary', 'Senior Javascript Developer', 'Senior Marketing Designer', 'Software Engineer', 'Support Engineer', 'Support Lead', 'System Architect', 'Systems Administrator', 'Team Leader', 'Technical Author'];

    // Private functions
    var example1 = function () {
        // Define variables
        table = document.querySelector('#kt_datatable_example_1');

        // Create edit button wrapper
        var editButton = document.createElement('button');
        const editIconClasses = ['btn', 'btn-sm', 'btn-icon', 'btn-active-color-primary', 'h-15px', 'w-15px', 'ms-3'];
        editButton.classList.add(...editIconClasses);

        // Create icon element
        var icon = document.createElement('i');
        const iconClasses = ['bi', 'bi-pencil-fill', 'fs-5'];
        icon.classList.add(...iconClasses);

        // Create edit button with icon
        editButton.appendChild(icon);

        // Create input field
        var inputField = document.createElement('input');
        inputField.classList.add('form-control');
        inputField.setAttribute('type', 'text');

        // Create datepicker
        var datepickerInput = document.createElement('input');
        datepickerInput.classList.add('form-control');

        // Create Select2 Dropdown
        var dropdownInput = document.createElement('select');
        dropdownInput.classList.add('form-select');
        dropdownInput.setAttribute('data-control', 'select2');
        dropdownInput.setAttribute('data-placeholder', 'Select a position');

        // Add all position options
        positionOptions.forEach(option => {
            var positionOption = document.createElement('option');
            positionOption.value = option;
            positionOption.innerHTML = option;
            dropdownInput.appendChild(positionOption);
        });

        // Get editable column state and type
        const theadCols = table.querySelectorAll('thead th');
        var columnData = [];
        theadCols.forEach(th => {
            columnData.push(
                {
                    edit: th.getAttribute('data-kt-col-edit') === 'false' ? false : true,
                    type: th.getAttribute('data-kt-col-type') ? th.getAttribute('data-kt-col-type') : false,
                });
        });

        // Assign active editable columns
        const tbodyRows = table.querySelectorAll('tbody tr');
        tbodyRows.forEach((tr, index) => {
            // Select cells within row
            const cells = tr.querySelectorAll('td');

            // Set column name & type to each cell per row
            cells.forEach((td, index) => {
                td.setAttribute('data-kt-col-edit', columnData[index].edit);
                if (columnData[index].type) {
                    td.setAttribute('data-kt-col-type', columnData[index].type);
                }
            });
        });

        // Cells hover handler
        const handleCellsHover = () => {
            const allCells = table.querySelectorAll('tbody tr td');
            allCells.forEach(td => {
                // Only apply hander to inactive editable cells
                if (td.getAttribute('data-kt-col-edit') === 'true') {
                    td.addEventListener('mouseenter', e => {
                        if (!td.classList.contains('editing')) {
                            td.appendChild(editButton);
                        }
                    });
                }
            });
        }

        // Edit button handler
        editButton.addEventListener('click', e => {
            // Define cell element and label
            const parentCell = e.target.closest('td');
            const type = parentCell.getAttribute('data-kt-col-type');
            const label = parentCell.innerText;

            // Toggle input field
            parentCell.classList.add('editing');            // Add editing state
            parentCell.innerHTML = '';                      // Remove current label

            // Reset all editable forms
            handleDropdown();                               // Reset dropdown

            if (type === 'date') {
                datepickerInput.value = label;              // Move cell label into datepicker value
                editButton.remove();                        // Remove edit button
                parentCell.appendChild(datepickerInput);    // Show datepicker field
                handleDatapicker();                         // Init datepicker                
            } else if (type === 'dropdown') {
                dropdownInput.value = label;                // Move cell label into dropdown value
                editButton.remove();                        // Remove edit button
                parentCell.appendChild(dropdownInput);      // Show dropdown field

                // Set selected dropdown value
                const allOptions = parentCell.querySelectorAll('select option');
                allOptions.forEach(option => {
                    option.removeAttribute('selected');

                    if (option.value === label) {
                        option.setAttribute('selected', 'selected');
                    }
                });

                dropdownFlag = true;

                // Init select2 --- more info on Select2: https://select2.org/getting-started/basic-usage
                $(dropdownInput).select2();

                // Handle selected event
                $(dropdownInput).on('select2:select', function (e) {
                    handleDropdown();
                });
            } else {
                inputField.value = label;                   // Move cell label into input field value
                editButton.remove();                        // Remove edit button
                parentCell.appendChild(inputField);         // Show input field
                inputField.focus();                         // Focus input field
            }
        });

        // Handle input blur/close event
        const handleBlurEvent = (el, elLabel) => {
            // Define cell element and label
            const parentCell = el.closest('td');
            const label = elLabel;

            // Reset cell state
            parentCell.innerText = label;
            parentCell.classList.remove('editing');

            // Update datatable cell data --- more info on cell update: https://datatables.net/reference/api/cell().data()
            datatable.cell($(parentCell)).data(label).draw(false);
        }

        // Datepicker handler
        const handleDatapicker = () => {
            // Init flatpickr --- more info on flatpicker: https://flatpickr.js.org/
            datepicker = flatpickr(datepickerInput, {
                dateFormat: "Y/m/d",
                clickOpens: false,
                // Trigger close event -- more info on events: https://flatpickr.js.org/events/
                onClose: function (selectedDates, dateStr, instance) {
                    handleBlurEvent(datepickerInput, dateStr);
                }
            });

            // Delay opening calendar to avoid conflict
            setTimeout(function () {
                datepicker.open();
            }, 50);
        }

        // Input field handler
        inputField.addEventListener('blur', e => {
            handleBlurEvent(e.target, e.target.value);
        });

        // Enter/Esc button handler on input field
        inputField.addEventListener('keyup', e => {
            if (e.key === 'Enter' || e.key === "Escape") {
                // Trigger input blur event
                inputField.blur();
            }
        });

        // Dropdown handler
        const handleDropdown = () => {
            // Return label state if dropdown already active somewhere in table
            if (dropdownFlag === true) {
                const label = dropdownInput.value;
                const parent = dropdownInput.closest('td');
                parent.innerText = label;
                parent.classList.remove('editing');

                // Update datatable cell data --- more info on cell update: https://datatables.net/reference/api/cell().data()
                datatable.cell($(parent)).data(label).draw(false);

                dropdownFlag = false;
            }
        }

        // Handle dropdown on blur event
        document.addEventListener('click', e => {
            if (!e.target.closest('[data-kt-col-type="dropdown"]')) {
                if (dropdownFlag) {
                    if (e.target !== icon) {
                        handleDropdown();
                    }
                }
            }
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            'columnDefs': [
                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)
            ],
            "order": [1, 'asc'],
            "drawCallback": function (settings) {  // Call function on every datatable draw --- more info on draw callback: https://datatables.net/reference/option/drawCallback
                handleCellsHover();
                initToggleToolbar();
                toggleToolbars();
            },
        });
    }

    // Init toggle toolbar
    var initToggleToolbar = () => {
        // Toggle selected action toolbar
        // Select all checkboxes
        const checkboxes = table.querySelectorAll('[type="checkbox"]');

        // Select elements
        const deleteSelected = document.querySelector('[data-kt-docs-table-select="delete_selected"]');

        // Toggle delete selected toolbar
        checkboxes.forEach(c => {
            // Checkbox on click event
            c.addEventListener('click', function () {
                setTimeout(function () {
                    toggleToolbars();
                }, 50);
            });
        });

        // Deleted selected rows
        deleteSelected.addEventListener('click', function () {
            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                text: "Are you sure you want to delete selected customers?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, delete!",
                cancelButtonText: "No, cancel",
                customClass: {
                    confirmButton: "btn fw-bold btn-danger",
                    cancelButton: "btn fw-bold btn-active-light-primary"
                }
            }).then(function (result) {
                if (result.value) {
                    Swal.fire({
                        text: "You have deleted all selected customers!.",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    }).then(function () {
                        // Remove all selected customers
                        checkboxes.forEach(c => {
                            if (c.checked) {
                                datatable.row($(c.closest('tbody tr'))).remove().draw();
                            }
                        });

                        // Remove header checked box
                        const headerCheckbox = table.querySelectorAll('[type="checkbox"]')[0];
                        headerCheckbox.checked = false;
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Selected customers was not deleted.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Toggle toolbars
    const toggleToolbars = () => {
        // Define variables
        const toolbarBase = document.querySelector('[data-kt-docs-table-toolbar="base"]');
        const toolbarSelected = document.querySelector('[data-kt-docs-table-toolbar="selected"]');
        const selectedCount = document.querySelector('[data-kt-docs-table-select="selected_count"]');

        // Select refreshed checkbox DOM elements 
        const allCheckboxes = table.querySelectorAll('tbody [type="checkbox"]');

        // Detect checkboxes state & count
        let checkedState = false;
        let count = 0;

        // Count checked boxes
        allCheckboxes.forEach(c => {
            if (c.checked) {
                checkedState = true;
                count++;
            }
        });

        // Toggle toolbars
        if (checkedState) {
            selectedCount.innerHTML = count;
            toolbarBase.classList.add('d-none');
            toolbarSelected.classList.remove('d-none');
        } else {
            toolbarBase.classList.remove('d-none');
            toolbarSelected.classList.add('d-none');
        }
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-docs-table-filter="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            datatable.search(e.target.value).draw();
        });
    }


    // Public methods
    return {
        init: function () {
            example1();
            handleSearchDatatable();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTDatatablesInlineEditable.init();
});