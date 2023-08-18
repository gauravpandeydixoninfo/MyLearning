#include<iostream>
#include<stdio.h>
using namespace std;
class student
{
    int rol;
    public :
    int clas;
    void set_rol(int rol)
    {
        this->rol=rol;
    }
    void display()
    {
       cout<<"\n clas of student="<<rol;
    }
    ~student()
    {
        cout<<"\n destructor called\n";
    }
};
int main()
{
    student s1;
    s1.clas=5;
    s1.set_rol(9);
    cout<<"\n rol of s1 student="<<s1.clas;
    s1.display();
    student s2(s1); //copy constructor called
    //s2.clas=12;
    // s1.set_rol(19);
    cout<<"\n rol of s2 student="<<s2.clas;
    s2.display();
    cout<<"\n";
    student *s3= new student(s2);
    cout<<"\n rol of s3 student="<<s3->clas;
    s3->display();
    delete s3;

    return 0;
}

   
