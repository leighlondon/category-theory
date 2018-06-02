#!/usr/bin/env python3
""" Notes for Category Theory. """


def identity(x):
    """ The identity function. """
    return x


def compose(f1, f2, **args):
    """ Composing functions f1 and f2. """
    def composed(**args):
        return f2(f1(**args))
    return composed
