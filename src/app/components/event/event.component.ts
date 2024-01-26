import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import interface
import { Root2 } from 'src/app/types';

//import jQuery library
import $ from 'jquery';

import { DialogBodyComponent } from 'src/app/components/dialog.body/dialog.body.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  matches: Root2[] = [];
  dates: Root2[] = [];

  private URL  = 'assets/json/events.json';

  constructor(private httpClient: HttpClient, private matDialog: MatDialog) {
  }

  ngOnInit() {

    //read json all data for appending
    this.httpClient.get<Root2[]>(this.URL).subscribe((rest: Root2[]) => {
      this.matches = rest;

      //read json date data for appending
      this.httpClient.get<Root2[]>(this.URL).subscribe((res: Root2[]) => {
        this.dates = res;

        //if has one or more duplicate dates
        this.dates.forEach((item, index) => {

          if (index !== this.dates.findIndex(i => i.date === item.date))
          {
            this.dates.splice(index, 1);
          }

        });

        $(document).ready(function () {

          //find and delete duplicates
          $(function () {

            var seen: any = {};

                $('.dates').each(function () {
                  var txt = $(this).text();

                  if (seen[txt]) {
                    $(this).remove();
                  }
                  else
                  {
                    seen[txt] = true;
                  }
                });
            });

          //find all elements with same date and add together if has the same date
          $('#id li:not([title])').append('<ul />');
          $('#id li[title]').each(function () {
            $(this).appendTo('#id li:contains(' + $(this).attr('title') + ') ul');
          });

          $('ul').addClass('events').css({ padding: '0 0 0 0' });

          //find how much elements has class game-finished
          $('div > ul > li > ul.events').each(function (index, obj) {

            let thisClass = $(obj).find('.game-finished')

            //if has more than one element with class game-finished, add class done
            if (thisClass.length >= 2)
            {
              thisClass.addClass('done');
            }

            //if has less than one element with class game-finished, remove class done
            else
            {
              thisClass.removeClass('done');
            }

          });

          //click event on nav bar button
          //if has class home-nav-btn this add class active and remove class from another btn
          //else add class active to teams-nav-btn and remove from home-nav-btn
          $('.nav-btn').on('click', function () {

            if ($(this).hasClass('home-nav-btn'))
            {
              $(this).addClass('active')
              $('.teams-nav-btn').removeClass('active');
            }
            else
            {
              $('.teams-nav-btn').addClass('active');
              $('.home-nav-btn').removeClass('active');
            }
          });

          //click event on li element
          $('.match').on("click", function () {

            //find value in elements
            const leagueTxt = $(this).find('.data-league-title').attr('id')!;
            const leagueImage = $(this).find('.data-league-logo').attr('id')!;
            const countryTxt = $(this).find('.data-country-name').attr('id')!;
            const countryImage = $(this).find('.data-country-flag').attr('id')!;

            //write value to dialog elements which was found
            $('.league-title').text(leagueTxt);
            $('.league-logo').attr('src', '' + leagueImage + '');
            $('.country-title').text(countryTxt);
            $('.country-flag').attr('src', '' + countryImage + '');

            //find value or text in elements
            const home = $(this).find('.home-team .team-title').text();
            const away = $(this).find('.away-team .team-title').text();
            const homeLogo = $(this).find('.home-team .team-logo').attr('src');
            const awayLogo = $(this).find('.away-team .team-logo').attr('src');
            const dateTime = $(this).find('.date-time').text();

            //write value or text to dialog elements which was found
            $('.home-team-dialog .team-title-dialog').text(home);
            $('.away-team-dialog .team-title-dialog').text(away);
            $('.date-time-dialog').text(dateTime);
            $('.home-team-dialog .team-logo-dialog').attr('src', '' + homeLogo + '');
            $('.away-team-dialog .team-logo-dialog').attr('src', '' + awayLogo + '');

            //find value from attributes
            const homeQuart1 = $(this).find('.home-quarter1').attr('id')!;
            const homeQuart2 = $(this).find('.home-quarter2').attr('id')!;
            const homeQuart3 = $(this).find('.home-quarter3').attr('id')!;
            const homeQuart4 = $(this).find('.home-quarter4').attr('id')!;
            const homeTotal = $(this).find('.home-totaler').attr('id')!;

            const awayQuart1 = $(this).find('.away-quarter1').attr('id')!;
            const awayQuart2 = $(this).find('.away-quarter2').attr('id')!;
            const awayQuart3 = $(this).find('.away-quarter3').attr('id')!;
            const awayQuart4 = $(this).find('.away-quarter4').attr('id')!;
            const awayTotal = $(this).find('.away-totaler').attr('id')!;

            //write value to dialog elements which was found
            $('.home-quart1').text(homeQuart1);
            $('.home-quart2').text(homeQuart2);
            $('.home-quart3').text(homeQuart3);
            $('.home-quart4').text(homeQuart4);
            $('.home-total').text(homeTotal);

            $('.away-quart1').text(awayQuart1);
            $('.away-quart2').text(awayQuart2);
            $('.away-quart3').text(awayQuart3);
            $('.away-quart4').text(awayQuart4);
            $('.away-total').text(awayTotal);

            //find next text what is inside in match element
            const next1 = $(this).next().find('.home-team .team-title').text();
            const next2 = $(this).next().find('.away-team .team-title').text();
            const notTxt1 = $(this).parent().parent().next().children().children().first().find('.home-team .team-title').text();
            const notTxt2 = $(this).parent().parent().next().children().children().first().find('.away-team .team-title').text();

            //if not found text in element append button with text what was inside in another group of ul elements
            if (next1.trim() === '' && next2.trim() === '') {
              $('.next-match').append('<button class="next-match-btn">' + notTxt1 + ' VS ' + notTxt2 + '</button>');
            }

            //if was found text then append button with text what was found
            else {
              $('.next-match').append('<button class="next-match-btn">' + next1 + ' VS ' + next2 + '</button>');
            }

            //constant for not repeat yourself
            const nextBtn = $('.next-match-btn');

            //add css rules for editing how look button
            nextBtn.css({
              background: "whitesmoke",
              color: "#59b374",
              borderRadius: "10px",
              border: "1px solid #59b374",
              padding: "1em",
              margin: "1em",
              textAlign: "center",
              boxShadow: "2px 2px 3px #cecece"
            });

            //hover in button for editing rules in css
            nextBtn.mouseover(function () {
                $(this).css({ background: "#59b374", color: "black" })
            });

            //hover out button for get back rules in css
            nextBtn.mouseout(function () {
                $(this).css({ background: "whitesmoke", color: "#59b374" })
            });

            //if has class game-finished
            //we show table of scores
            //add back button with this id and remove button what was append before
            if ($(this).hasClass('game-finished')) {
              $('.scores').show();
              $('#bet1').addBack();
              $('#bet2').remove();
            }

            //if has not class game-finished
            //hide table of scores
            //add back button with this id and remove button what was append before
            else {
              $('.scores').hide();
              $('#bet1').remove();
              $('#bet2').addBack();
            }

            //if it is last match of matches then remove next match button
            if (next1.trim() === '' && next2.trim() === '' && notTxt1.trim() === '' && notTxt2.trim() === '') {
              $('.next-match-btn').remove();
            }
          });
        });
      });
    });
  }

  //method for open dialog with config
  openDialog() {
    this.matDialog.open(DialogBodyComponent, {
      maxHeight: '93vh',
      position: { top: '1em', bottom: '1em' },
      panelClass: 'dialog-body',
    });
  }
}
