var player,$player,volume=55,is_playing=!1;function stopAllPlayers(){player.pause(),player.src="",is_playing=!1,$(".btn-audio").removeClass("playing").find("i").removeClass("zmdi-stop").addClass("zmdi-play"),$("#radio-player-controls").removeClass("jp-state-playing")}function setVolume(e){volume=e;var l=Math.round(100*volume);$(".jp-volume-bar-value").css("width",l+"%"),player.volume=Math.pow(volume,3),store.enabled&&store.set("player_volume",100*volume)}function playAudio(e){player.src=e,player.play()}function handlePlayClick(e){btn=$('.btn-audio[data-url="'+e+'"]'),btn.hasClass("playing")?stopAllPlayers():(is_playing&&stopAllPlayers(),playAudio(e),btn.addClass("playing").find("i").removeClass("zmdi-play").addClass("zmdi-stop"))}$(function(){store.enabled&&void 0!==store.get("player_volume")&&(volume=store.get("player_volume",volume)),$(".btn-audio").on("click",function(e){return e.preventDefault(),handlePlayClick($(this).data("url")),!1}),player=document.createElement("audio"),$player=$(player),setVolume(volume/100),$player.on("play",function(e){is_playing=!0,$(".jp-unmute").hide(),$("#radio-player-controls,#radio-embedded-controls").addClass("jp-state-playing");var l=Math.round(100*$player.volume);$(".jp-volume-bar-value").css("width",l+"%")}),$player.on("ended",function(e){$("#radio-player-controls,#radio-embedded-controls").removeClass("jp-state-playing")}),"mediaSession"in navigator&&navigator.mediaSession.setActionHandler("pause",function(){stopAllPlayers()}),$(".jp-pause").on("click",function(e){stopAllPlayers()}),$(".jp-mute").on("click",function(e){player.volume=0,$(".jp-unmute").show(),$(".jp-mute").hide()}),$(".jp-unmute").on("click",function(e){setVolume(volume),$(".jp-unmute").hide(),$(".jp-mute").show()}),$(".jp-volume-bar").on("click",function(e){var l=$(e.currentTarget),a=l.offset(),o=e.pageX-a.left,t=l.width();l.height(),e.pageY,a.top,l.height();setVolume(o/t)}),$('.btn-audio[data-autoplay="true"]:first').click()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbInBsYXllciIsIiRwbGF5ZXIiLCJ2b2x1bWUiLCJpc19wbGF5aW5nIiwic3RvcEFsbFBsYXllcnMiLCJwYXVzZSIsInNyYyIsIiQiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJhZGRDbGFzcyIsInNldFZvbHVtZSIsIm5ld192b2x1bWUiLCJ2b2x1bWVfcGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsImNzcyIsInBvdyIsInN0b3JlIiwiZW5hYmxlZCIsInNldCIsInBsYXlBdWRpbyIsInNvdXJjZV91cmwiLCJwbGF5IiwiaGFuZGxlUGxheUNsaWNrIiwiYXVkaW9fc291cmNlIiwiYnRuIiwiaGFzQ2xhc3MiLCJ1bmRlZmluZWQiLCJnZXQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXMiLCJkYXRhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaGlkZSIsIm5hdmlnYXRvciIsIm1lZGlhU2Vzc2lvbiIsInNldEFjdGlvbkhhbmRsZXIiLCJzaG93IiwiJGJhciIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXQiLCJ4IiwicGFnZVgiLCJsZWZ0IiwidyIsIndpZHRoIiwiaGVpZ2h0IiwicGFnZVkiLCJ0b3AiLCJjbGljayJdLCJtYXBwaW5ncyI6IkFBSUEsSUFFSUEsT0FDQUMsUUFIQUMsT0FBUyxHQUNUQyxZQUFhLEVBSWpCLFNBQVNDLGlCQUVMSixPQUFPSyxRQUNQTCxPQUFPTSxJQUFNLEdBRWJILFlBQWEsRUFDYkksRUFBRSxjQUFjQyxZQUFZLFdBQVdDLEtBQUssS0FBS0QsWUFBWSxhQUFhRSxTQUFTLGFBRW5GSCxFQUFFLDBCQUEwQkMsWUFBWSxvQkFHNUMsU0FBU0csVUFBVUMsR0FFZlYsT0FBU1UsRUFFVCxJQUFJQyxFQUFpQkMsS0FBS0MsTUFBZSxJQUFUYixRQUNoQ0ssRUFBRSx3QkFBd0JTLElBQUksUUFBU0gsRUFBZSxLQUV0RGIsT0FBT0UsT0FBU1ksS0FBS0csSUFBSWYsT0FBTyxHQUU1QmdCLE1BQU1DLFNBQ05ELE1BQU1FLElBQUksZ0JBQXdCLElBQVBsQixRQUduQyxTQUFTbUIsVUFBVUMsR0FFZnRCLE9BQU9NLElBQU1nQixFQUNidEIsT0FBT3VCLE9BR1gsU0FBU0MsZ0JBQWdCQyxHQUVyQkMsSUFBTW5CLEVBQUUsd0JBQXdCa0IsRUFBYSxNQUV6Q0MsSUFBSUMsU0FBUyxXQUNidkIsa0JBRUlELFlBQ0FDLGlCQUVKaUIsVUFBVUksR0FFVkMsSUFBSWhCLFNBQVMsV0FBV0QsS0FBSyxLQUFLRCxZQUFZLGFBQWFFLFNBQVMsY0FJNUVILEVBQUUsV0FHTVcsTUFBTUMsY0FBMENTLElBQS9CVixNQUFNVyxJQUFJLG1CQUMzQjNCLE9BQVNnQixNQUFNVyxJQUFJLGdCQUFpQjNCLFNBRXhDSyxFQUFFLGNBQWN1QixHQUFHLFFBQVMsU0FBU0MsR0FHakMsT0FGQUEsRUFBRUMsaUJBQ0ZSLGdCQUFnQmpCLEVBQUUwQixNQUFNQyxLQUFLLFNBQ3RCLElBSVhsQyxPQUFTbUMsU0FBU0MsY0FBYyxTQUNoQ25DLFFBQVVNLEVBQUVQLFFBRVpXLFVBQVVULE9BQU8sS0FHakJELFFBQVE2QixHQUFHLE9BQVEsU0FBU0MsR0FDeEI1QixZQUFhLEVBRWJJLEVBQUUsY0FBYzhCLE9BQ2hCOUIsRUFBRSxtREFBbURHLFNBQVMsb0JBRTlELElBQUlHLEVBQWlCQyxLQUFLQyxNQUF1QixJQUFqQmQsUUFBUUMsUUFDeENLLEVBQUUsd0JBQXdCUyxJQUFJLFFBQVNILEVBQWUsT0FHMURaLFFBQVE2QixHQUFHLFFBQVMsU0FBU0MsR0FDekJ4QixFQUFFLG1EQUFtREMsWUFBWSxzQkFHakUsaUJBQWtCOEIsV0FDbEJBLFVBQVVDLGFBQWFDLGlCQUFpQixRQUFTLFdBQzdDcEMsbUJBS1JHLEVBQUUsYUFBYXVCLEdBQUcsUUFBUyxTQUFTQyxHQUNoQzNCLG1CQUdKRyxFQUFFLFlBQVl1QixHQUFHLFFBQVMsU0FBU0MsR0FDL0IvQixPQUFPRSxPQUFTLEVBQ2hCSyxFQUFFLGNBQWNrQyxPQUNoQmxDLEVBQUUsWUFBWThCLFNBR2xCOUIsRUFBRSxjQUFjdUIsR0FBRyxRQUFTLFNBQVNDLEdBQ2pDcEIsVUFBVVQsUUFDVkssRUFBRSxjQUFjOEIsT0FDaEI5QixFQUFFLFlBQVlrQyxTQUdsQmxDLEVBQUUsa0JBQWtCdUIsR0FBRyxRQUFTLFNBQVNDLEdBQ3JDLElBQUlXLEVBQU9uQyxFQUFFd0IsRUFBRVksZUFDWEMsRUFBU0YsRUFBS0UsU0FDZEMsRUFBSWQsRUFBRWUsTUFBUUYsRUFBT0csS0FDckJDLEVBQUlOLEVBQUtPLFFBQ0xQLEVBQUtRLFNBQVduQixFQUFFb0IsTUFBUVAsRUFBT1EsSUFDakNWLEVBQUtRLFNBRWJ2QyxVQUFVa0MsRUFBRUcsS0FJaEJ6QyxFQUFFLDBDQUEwQzhDIiwiZmlsZSI6InJhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSYWRpbyBQbGF5ZXIgU2NyaXB0XG4gKi9cblxudmFyIHZvbHVtZSA9IDU1LFxuICAgIGlzX3BsYXlpbmcgPSBmYWxzZSxcbiAgICBwbGF5ZXIsXG4gICAgJHBsYXllcjtcblxuZnVuY3Rpb24gc3RvcEFsbFBsYXllcnMoKVxue1xuICAgIHBsYXllci5wYXVzZSgpO1xuICAgIHBsYXllci5zcmMgPSAnJztcblxuICAgIGlzX3BsYXlpbmcgPSBmYWxzZTtcbiAgICAkKCcuYnRuLWF1ZGlvJykucmVtb3ZlQ2xhc3MoJ3BsYXlpbmcnKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ3ptZGktc3RvcCcpLmFkZENsYXNzKCd6bWRpLXBsYXknKTtcblxuICAgICQoJyNyYWRpby1wbGF5ZXItY29udHJvbHMnKS5yZW1vdmVDbGFzcygnanAtc3RhdGUtcGxheWluZycpO1xufVxuXG5mdW5jdGlvbiBzZXRWb2x1bWUobmV3X3ZvbHVtZSlcbntcbiAgICB2b2x1bWUgPSBuZXdfdm9sdW1lO1xuXG4gICAgdmFyIHZvbHVtZV9wZXJjZW50ID0gTWF0aC5yb3VuZCh2b2x1bWUgKiAxMDApO1xuICAgICQoJy5qcC12b2x1bWUtYmFyLXZhbHVlJykuY3NzKCd3aWR0aCcsIHZvbHVtZV9wZXJjZW50KyclJyk7XG5cbiAgICBwbGF5ZXIudm9sdW1lID0gTWF0aC5wb3codm9sdW1lLDMpO1xuXG4gICAgaWYgKHN0b3JlLmVuYWJsZWQpXG4gICAgICAgIHN0b3JlLnNldCgncGxheWVyX3ZvbHVtZScsIHZvbHVtZSoxMDApO1xufVxuXG5mdW5jdGlvbiBwbGF5QXVkaW8oc291cmNlX3VybClcbntcbiAgICBwbGF5ZXIuc3JjID0gc291cmNlX3VybDtcbiAgICBwbGF5ZXIucGxheSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQbGF5Q2xpY2soYXVkaW9fc291cmNlKVxue1xuICAgIGJ0biA9ICQoJy5idG4tYXVkaW9bZGF0YS11cmw9XCInK2F1ZGlvX3NvdXJjZSsnXCJdJyk7XG5cbiAgICBpZiAoYnRuLmhhc0NsYXNzKCdwbGF5aW5nJykpIHtcbiAgICAgICAgc3RvcEFsbFBsYXllcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNfcGxheWluZylcbiAgICAgICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XG5cbiAgICAgICAgcGxheUF1ZGlvKGF1ZGlvX3NvdXJjZSk7XG5cbiAgICAgICAgYnRuLmFkZENsYXNzKCdwbGF5aW5nJykuZmluZCgnaScpLnJlbW92ZUNsYXNzKCd6bWRpLXBsYXknKS5hZGRDbGFzcygnem1kaS1zdG9wJyk7XG4gICAgfVxufVxuXG4kKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gQ2hlY2sgd2Vic3RvcmFnZSBmb3IgZXhpc3Rpbmcgdm9sdW1lIHByZWZlcmVuY2UuXG4gICAgaWYgKHN0b3JlLmVuYWJsZWQgJiYgc3RvcmUuZ2V0KCdwbGF5ZXJfdm9sdW1lJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdm9sdW1lID0gc3RvcmUuZ2V0KCdwbGF5ZXJfdm9sdW1lJywgdm9sdW1lKTtcblxuICAgICQoJy5idG4tYXVkaW8nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGFuZGxlUGxheUNsaWNrKCQodGhpcykuZGF0YSgndXJsJykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYXVkaW8gZWxlbWVudC5cbiAgICBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICRwbGF5ZXIgPSAkKHBsYXllcik7XG5cbiAgICBzZXRWb2x1bWUodm9sdW1lLzEwMCk7XG5cbiAgICAvLyBIYW5kbGUgZXZlbnRzLlxuICAgICRwbGF5ZXIub24oJ3BsYXknLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlzX3BsYXlpbmcgPSB0cnVlO1xuXG4gICAgICAgICQoJy5qcC11bm11dGUnKS5oaWRlKCk7XG4gICAgICAgICQoJyNyYWRpby1wbGF5ZXItY29udHJvbHMsI3JhZGlvLWVtYmVkZGVkLWNvbnRyb2xzJykuYWRkQ2xhc3MoJ2pwLXN0YXRlLXBsYXlpbmcnKTtcblxuICAgICAgICB2YXIgdm9sdW1lX3BlcmNlbnQgPSBNYXRoLnJvdW5kKCRwbGF5ZXIudm9sdW1lICogMTAwKTtcbiAgICAgICAgJCgnLmpwLXZvbHVtZS1iYXItdmFsdWUnKS5jc3MoJ3dpZHRoJywgdm9sdW1lX3BlcmNlbnQrJyUnKTtcbiAgICB9KTtcblxuICAgICRwbGF5ZXIub24oJ2VuZGVkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAkKCcjcmFkaW8tcGxheWVyLWNvbnRyb2xzLCNyYWRpby1lbWJlZGRlZC1jb250cm9scycpLnJlbW92ZUNsYXNzKCdqcC1zdGF0ZS1wbGF5aW5nJyk7XG4gICAgfSk7XG5cbiAgICBpZiAoJ21lZGlhU2Vzc2lvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYVNlc3Npb24uc2V0QWN0aW9uSGFuZGxlcigncGF1c2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2tzLlxuICAgICQoJy5qcC1wYXVzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc3RvcEFsbFBsYXllcnMoKTtcbiAgICB9KTtcblxuICAgICQoJy5qcC1tdXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBwbGF5ZXIudm9sdW1lID0gMDtcbiAgICAgICAgJCgnLmpwLXVubXV0ZScpLnNob3coKTtcbiAgICAgICAgJCgnLmpwLW11dGUnKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanAtdW5tdXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZXRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgJCgnLmpwLXVubXV0ZScpLmhpZGUoKTtcbiAgICAgICAgJCgnLmpwLW11dGUnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanAtdm9sdW1lLWJhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICRiYXIgPSAkKGUuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBvZmZzZXQgPSAkYmFyLm9mZnNldCgpLFxuICAgICAgICAgICAgeCA9IGUucGFnZVggLSBvZmZzZXQubGVmdCxcbiAgICAgICAgICAgIHcgPSAkYmFyLndpZHRoKCksXG4gICAgICAgICAgICB5ID0gJGJhci5oZWlnaHQoKSAtIGUucGFnZVkgKyBvZmZzZXQudG9wLFxuICAgICAgICAgICAgaCA9ICRiYXIuaGVpZ2h0KCk7XG5cbiAgICAgICAgc2V0Vm9sdW1lKHgvdyk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgYXV0b3BsYXkuXG4gICAgJCgnLmJ0bi1hdWRpb1tkYXRhLWF1dG9wbGF5PVwidHJ1ZVwiXTpmaXJzdCcpLmNsaWNrKCk7XG5cbn0pO1xuIl19
