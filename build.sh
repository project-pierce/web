#!/bin/sh

version=$1

mkdir releases/$version
rm -rf releases/$version/*
cp *.html releases/$version/
cp -r images releases/$version/
rm -rf releases/$version/images/src
# cp report.md.pdf releases/$version/report.pdf
cd releases/$version
7z a $1.zip *
