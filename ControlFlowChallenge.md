# Flow Challenge

Pretend that there is a method `print()` that
prints whatever word you give it.

`print("Foo")` prints `Foo` on the screen

```
print("One");
print("Two");
```

prints `One Two` on the screen.

Look at the following code samples, and try to
predict what would print on the screen.

## Challenge 1

```
let x1 = true;

print("This");
if (x1) {
    print("is");
} else {
    print("potato");
}
print("correct!");
```

## Challenge 2

```
let x1 = true;
let x2 = false;

print("Keep");

if (x1 || x2) {
    print("going,");
} else {
    print("chicken");
}

print("you");

if (x1 && x2) {
    print("peacock");
} else {
    print("got");
}

print("this");
```

## Challenge 3

```
let x1 = true;
let x2 = false;
let x3 = true;

print("Boolean");

if (x1) {
    if (x2) {
        print("purple");
    } else {
        print("logic");
    }

    print("for");

} else {
    if (x3) {
        print("blue");
    } else {
        print("red");
    }
}

print("the");

if (x1 && (x2 || !x3)) {
    print("potato");
} else {
    print("win");
}
```

