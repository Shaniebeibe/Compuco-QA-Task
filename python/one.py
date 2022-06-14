class Motorcycle:
    is_engine_on = False
    is_headlight_on = False

    def __init__(self, make, model):
        self.make = make
        self.model = model

    def __repr__(self):
        return (f'{self.make} {self.model} with engine '
                f'{"on" if self.is_engine_on else "off"} and headlight '
                f' {"on" if self.is_headlight_on else "off"}')

    def turn_engine_on(self):
        self.is_engine_on = True

moto = Motorcycle('boda', 'digi')
print(moto)
print(moto.is_engine_on)

moto.turn_engine_on()
print(moto.is_engine_on)

def find_max(nums):
 max_num = float("-inf") # smaller than all other numbers
 for num in nums:
  if num > max_num:
  # (Fill in the missing line here)
   return max_num
 