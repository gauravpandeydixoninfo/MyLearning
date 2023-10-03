class student{
    int rol;
    const int fees;
 public:
    student(int rl, int fee): rol(rl), fees(fee){
        cout<<"\nConstructor called\n";
    }
    void show()
    {
        cout<<"\nvalue of rollno="<<rol;
        cout<<"\nvalue of fess="<<fees<<"\n";
    }
    student(){
        cout<<"\ndefault constructor called\n";
};
