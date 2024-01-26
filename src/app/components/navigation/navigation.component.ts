import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  ngOnInit() {
    $(document).ready(function () {

      // Check for the active menu item and adjust styles accordingly
      $('.main-navbar').each(function () {

        if ($(this).find('.teams-nav-btn').hasClass('active'))
        {
          $('.home-wrapper').removeClass('selected');
          $('.teams-wrapper').addClass('selected');
          $('#navbar-animmenu').css({ top: 0 });
        }

        else if ($(this).find('.home-nav-btn').hasClass('active'))
        {
          $('.teams-wrapper').removeClass('selected');
          $('.home-wrapper').addClass('selected');
          $('#navbar-animmenu').css({ top: '-14px' });
        }
      });

      // Initialize the horizontal selector based on the active item
      const tabsNewAnim = $('#navbar-animmenu');
      const activeItemNewAnim = tabsNewAnim.find('.selected');
      const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      const itemPosNewAnimLeft = activeItemNewAnim.position();

      $(".hori-selector").css({
        "left":itemPosNewAnimLeft.left + "px",
        "width": activeWidthNewAnimWidth + "px"
      });

      // Handle click events on navigation items
      $("#navbar-animmenu").on("click", "li", function () {

        $('#navbar-animmenu ul li').removeClass("selected");
        $(this).addClass('selected');

        // Adjust the horizontal selector based on the clicked item
        const activeWidthNewAnimWidth = $(this).innerWidth();
        const itemPosNewAnimLeft = $(this).position();

        $(".hori-selector").css({
          "left":itemPosNewAnimLeft.left + "px",
          "width": activeWidthNewAnimWidth + "px"
        });

        // Adjust the position of the menu based on the clicked item type
        const teamsBtn = $(this).find('.nav-btn');

        if ($(teamsBtn).hasClass('teams-nav-btn'))
        {
          $('#navbar-animmenu').css({ top: 0 });
        }

        else
        {
          $('#navbar-animmenu').css({ top: '-14px' });
        }
      });
    });
  }
}
