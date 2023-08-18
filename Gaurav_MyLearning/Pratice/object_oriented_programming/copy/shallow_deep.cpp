#include<iostream>
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
using namespace std;
class student
{
    int age;
    char *name;
    public :

    void set(int age, char *name)
    {   //shallow copy
        //this->name=name;
        this->age=age;
        //deep copy
        this->name=new char(strlen(name)+1);
        strcpy(this->name, name);
    }
    void display()
    {
        cout<<"\n value of age="<<age;
        cout<<"\n name of student="<<name<<"\n";
    }
};
int main()
{
    char name[]="gaurav";
    student s1;
    s1.set(5, name);
    s1.display();
    name[3]='p';
    student s2;
    s2.set(7, name);
    s2.display();
    s1.display();
    return 0;
}

