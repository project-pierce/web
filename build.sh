#!/bin/sh

version=$1

mkdir releases/$version
rm -rf releases/$version/*
mkdir releases/$version/Team09
cp *.html releases/$version/Team09
cp *.css releases/$version/Team09
cp *.js releases/$version/Team09
cp -r images releases/$version/Team09
cp -r videos releases/$version/Team09
rm -rf releases/$version/Team09/images/src
cp pres.pptx releases/$version/
# cp report-$version.md.pdf releases/$version/report.pdf
cd releases/$version
7z a $1.zip *
