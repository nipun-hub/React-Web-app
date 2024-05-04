import React from 'react';
import $ from 'jquery';

const body = document.querySelector('#ntostDisplay');

function nTost(
    {
        type = '',
        logo = '',
        titleText = '',
        subtitleText = '',
        dictText = '',
        time = '',
        position = '',
        bgcolour = '',
    }
) {
    logo = type == 'success' || type == '' ? "<i class='bi bi-check-circle text-success fs-5 me-2'></i>" : (type == 'error' ? "<i class='bi bi-x-circle text-worning fs-5 me-2'></i>" : (type == 'info' ? "<i class='bi bi-info-circle text-info fs-5 me-2'></i>" : ''));
    subtitleText = subtitleText == '' ? '' : "<small>" + subtitleText + "</small>";
    dictText = dictText == '' ? '' : "<div class='toast-body'>" + dictText + "</div>";
    switch (position) {
        case '':
        case 'bottom-end':
            position = "bottom-0 end-0";
            break;
        case 'top-start':
            position = "top-0 start-0";
            break;
        case 'top-center':
            position = "top-0 start-50 translate-middle-x";
            break;
        case 'top-end':
            position = "top-0 end-0";
            break;
        case 'middle-start':
            position = "top-50 start-0 translate-middle-y";
            break;
        case 'middle-center':
            position = "top-50 start-50 translate-middle";
            break;
        case 'middle-end':
            position = "top-50 end-0 translate-middle-y";
            break;
        case 'bottom-start':
            position = "bottom-0 start-0";
            break;
        case 'bottom-center':
            position = "bottom-0 start-50 translate-middle-x";
            break;
        default:
            position = "bottom-0 end-0";
    }

    switch (bgcolour) {
        case 'green':
            bgcolour = "alert alert-success";
            break;
        case 'red':
            bgcolour = "alert alert-danger";
            break;
        case 'blue':
            bgcolour = "alert alert-info";
            break;
        default:
            bgcolour = '';
    }

    switch (type) {
        case 'success':
            bgcolour = 'alert alert-success';
            logo = "<i class='bi bi-check-circle text-success fs-5 me-2'></i>";
            titleText = titleText == '' ? "Successfully!" : titleText;
            break;
        case 'error':
            bgcolour = 'alert alert-danger';
            logo = "<i class='bi bi-x-circle text-worning fs-5 me-2'></i>";
            titleText = titleText == '' ? "Error Plece Check!" : titleText;
            break;
        case 'info':
            bgcolour = "alert alert-info";
            logo = "<i class='bi bi-info-circle text-info fs-5 me-2'></i>";
            titleText = titleText == '' ? "Information!" : titleText;
        default:
    }
    titleText = titleText == '' ? "Successfully" : titleText;
    const FinalyContrnt = `
    <div class="${bgcolour} toast border-none m-3 mb-5 shadow-lg p-2 position-absolute ${position}" data-bs-autohide="false" id="nTost">
        <div class=" ${bgcolour} toast-header  border-none p-0 px-2">
            <strong class="me-auto d-flex align-items-center">${logo} ${titleText}</strong>
            ${subtitleText}
            <button type="button" class="btn-close end-0" data-bs-dismiss="toast"></button>
        </div>
        ${dictText}
    </div>`;

    body.innerHTML = FinalyContrnt;
    $("#nTost").toast("show");
    if (time != 'not') {
        time = time == '' ? 5000 : time;
        let closenTost;
        clearTimeout(closenTost);
        closenTost = setTimeout(() => {
            clearTimeout(closenTost); // Clear existing timeout
            $("#nTost").toast("hide");
        }, time);
        $("#nTost").on("hidden.bs.toast", function () {
            clearTimeout(closenTost);
        });
    }

}