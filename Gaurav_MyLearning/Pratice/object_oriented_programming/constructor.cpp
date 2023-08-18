#include<iostream>
#include<stdio.h>
using namespace std;
class student
{
    public:
        int rol;
        int clas;
        student()
        {
            cout<<"\n constructor called\n";
            rol=1;
            clas=1;
        };
        student(int rol)
        {
            this->rol=rol;
        };
  };
int main()
{
    student s1;
    cout<<"\nvalue of rol="<< s1.rol;
    cout<<"\nvalue of clas="<<s1.clas<<"\n";
    student s2(5);
    cout<<"\nvalue of rol="<< s2.rol;
    cout<<"\nvalue of clas="<<s2.clas<<"\n";
    student s4=s2; // copy constructor will be called directly
    student s5;
    s5=s4; //copy assignment operator is called
    return 0;

}

