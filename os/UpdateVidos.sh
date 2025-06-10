#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
cd $DIR

gpio mode 14 in
gpio mode 15 in
gpio mode 16 in


echo "UPDATING"

#countdown timer
(for (( i=3; i>0; i--)); do
	BUTTON1="$(gpio read 14)"
	BUTTON2="$(gpio read 15)"
	BUTTON3="$(gpio read 16)"
	if [[ 1 == ${BUTTON1} && 1 == ${BUTTON2} && 1 == ${BUTTON3} ]]; then 
	    echo "ENTER UPDATE MODE"
	    sudo systemctl stop vidos
	    git status
	    git pull
	    sudo make -j4
	    sudo systemctl start vidos
	    break
	 #    gpio write 0 0
		# gpio write 1 0
		# gpio write 2 1
		# gpio write 3 0
		# gpio write 4 0
		# gpio write 5 1
		# gpio write 6 0
		# gpio write 7 0
		# gpio write 13 1	
	else
		sleep 1 &
		printf "  $i \r"
		wait
	fi 
done)

