#!/usr/bin/env python3
""" Notes for Category Theory. """


def identity(x):
    """ The identity function. """
    return x


def compose(f1, f2):
    """ Composing functions f1 and f2. """
    return f2(f1())
