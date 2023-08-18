#include<iostream>
#include<stdio.h>
#include "student2.cpp"
using namespace std;
int main()
{
    student *s1= new student;
//    s1->roll=5;
    s1->clas=9;
    s1->setroll();
    //cout<<"\nroll of s1=>"<<s1->roll<<"\n";
    cout<<"\nclass of s1=>"<<s1->clas<<"\n";
    cout<<"\n roll of s1=>"<<s1->show()<<"\n";
    return 0;
}

