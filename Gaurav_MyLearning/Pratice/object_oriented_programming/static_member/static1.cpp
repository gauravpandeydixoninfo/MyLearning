#include<iostream>
#include<stdio.h>
using namespace std;
class student
{
    int rol;
    int clas;
 
    public:
    static int str;
    student()
    {
        str++;
    }
};
int student:: str=0;
int main()
{
    student s1;
    cout<<"size of class object="<<sizeof(s1)<<"\n";
    cout<<"value of str ="<<student::str<<"\n";
    student s2;
    cout<<"size of class object="<<sizeof(s2)<<"\n";
    cout<<"value of str ="<<student::str<<"\n";
    student s3;
    cout<<"size of class object="<<sizeof(s3)<<"\n";
    cout<<"value of str ="<<student::str<<"\n";
    //cout<<"value of str ="<<str<<"\n";
    return 0;
}

