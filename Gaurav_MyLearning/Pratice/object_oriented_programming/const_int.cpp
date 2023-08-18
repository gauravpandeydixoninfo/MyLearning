#include<iostream>
#include<stdio.h>
using namespace std;
class student
{
    int const age;
    int rol;
    public:
    student(int age) : age(age)
    {
        cout<<"\n Enter your rol==";
        cin>> rol;
    }
    void print()
    {
        cout<<"\n age="<<age;
        cout<<"\n rol="<<rol<<"\n";
    }
};
int main()
{
    student s1(5);
    s1.print();
    return 0;
}
