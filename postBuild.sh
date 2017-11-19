#!/bin/bash

sed -i s:'<title>Be Heard</title>':'\n     <!-- insertion-point-jss -->  \n\n\n<title>Be Heard</title>\n': build/index.html