#include<iostream>
#include<stdio.h>
#include "student.cpp"
using namespace std;
int main()
{
    student s1;
    s1.clas=9;
    s1.roll=5;
    cout<<"\n class of s1="<<s1.clas;
    cout<<"\n roll of s1="<<s1.roll;
    student *s2=new student;
    (*s2).clas=7;
    (*s2).roll=2;
    cout<<"\n class of dynamic type==>"<<(*s2).clas;
    cout<<"\n class of dynamic type==>"<<(*s2).clas;
    cout<<"\n roll of dynamic type==>"<<s2->roll;
    cout<<"\n class of dynamic type==>"<<s2->clas<<"\n";
    //cout<<"\n roll of dynamic type==>"<<s1->roll;
    // cout<<"\n class of dynamic type==>"<<s1->clas<<"\n";
    return 0;
}

